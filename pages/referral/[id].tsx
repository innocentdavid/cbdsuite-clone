import { useSession } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import CreatingMerchant from "../../components/CreatingMerchant";
import Loading from "../../components/Loading";
import MerchantApplication from "../../components/MerchantApplication";
import { supabaseClient } from "../../utils/supabase"

type MerchantApplication = {
  id: string;
  userId: string;
  createdAt: string;
}

type ReferralRegistrationProps = {
  merchantApplication: MerchantApplication;
  setMerchantApplication: (merchantApplication: MerchantApplication) => void
}

export default function ReferralRegistration({ merchantApplication, setMerchantApplication }: ReferralRegistrationProps) {
  const { session } = useSession();
  const [loading, setLoading] = useState(true);

  // on first load, fetch and set todos
  useEffect(() => {
    const loadMerchantApplication = async () => {
      try {
        setLoading(true);
        const supabaseAccessToken = await session?.getToken({
          template: "supabase",
        });
        const supabase = await supabaseClient(supabaseAccessToken);
        const { data: merchantApplication } = await supabase.from("merchant_applications").select("*").single();
        setMerchantApplication(merchantApplication);
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    };
    loadMerchantApplication();
  }, []);

  // if loading, just show basic message
  if (loading) {
    return <div className="rounded-lg align-middle bg-white px-5 py-6 shadow sm:px-6 h-96"><Loading /></div>;
  }

  if (!merchantApplication) {
    return <div className="rounded-lg align-middle bg-white px-5 py-6 shadow sm:px-6 h-96"><CreatingMerchant /></div>;
  }
  
  return (
    <MerchantApplication merchantApplication={merchantApplication}/>
  )
}
