import MerchantApplicationSteps from "./MerchantApplicationSteps";

export default function MerchantApplication(props: { merchantApplication: any}) {
  return (
    <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
        <MerchantApplicationSteps />
      <span>{props.merchantApplication?.id}</span>
      <iframe
        src="https://zipmark-xczvz.formstack.com/forms/joy_organics_merchant_application_wizard?User_Identifier=1234&Email=jake@zipmark.com"
        title="JO Application Wizard"
        width="100%"
        height="800"
      ></iframe>
    </div>
  )
}
