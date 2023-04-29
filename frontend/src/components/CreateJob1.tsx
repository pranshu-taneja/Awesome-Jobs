type UserData = {
  JobTitle: string;
  CompanyName: string;
  Industry: string;
  Location: string;
  RemoteType: string;
}
type UserFormProps = UserData & {
  UpdateFields: (fields: Partial<UserData>)=>void  
}

function CreateJob1({JobTitle, CompanyName, Industry, Location, RemoteType, UpdateFields} : UserFormProps ) {
  return (
    <div>
      <div className="flex flex-col mb-[24px]">
        <p className="text-[14px]/[20px] font-poppins font-[500]">Job Title</p>
        <input
          placeholder="ex. UX UI Designer"
          className="rounded-[5px] w-[513px] h-[36px] py-[8px] px-[12px] border border-CardBorder font-poppins"
          type="text"
          value={JobTitle}
          onChange={e=>{UpdateFields({JobTitle: e.target.value})}}
        />
      </div>

      <div className="flex flex-col mb-[24px]">
        <p className="text-[14px]/[20px] font-poppins font-[500]">
          Company Name
        </p>
        <input
          placeholder="ex. Google"
          className="rounded-[5px] w-[513px] h-[36px] py-[8px] px-[12px] border border-CardBorder font-poppins"
          type="text"
          value={CompanyName}
          onChange={e=>{UpdateFields({CompanyName: e.target.value})}}
        />
      </div>

      <div className="flex flex-col mb-[24px]">
        <p className="text-[14px]/[20px] font-poppins font-[500]">Industry</p>
        <input
          placeholder="ex. Information Technology"
          className="rounded-[5px] w-[513px] h-[36px] py-[8px] px-[12px] border border-CardBorder font-poppins"
          type="text"
          value={Industry}
          onChange={e=>{UpdateFields({Industry: e.target.value})}}
        />
      </div>

      <div className="flex flex-row justify-between mb-[24px]">
        <div>
          <p className="text-[14px]/[20px] font-poppins font-[500]">Location</p>
          <input
            placeholder="ex. Chennai"
            className="rounded-[5px] w-[244.5px] h-[36px] py-[8px] px-[12px] border border-CardBorder font-poppins"
            type="text"
            value={Location}
            onChange={e=>{UpdateFields({Location: e.target.value})}}
          />
        </div>
        <div>
          <p className="text-[14px]/[20px] font-poppins font-[500]">
            Remote Type
          </p>
          <input
            placeholder="ex. In-office"
            className="rounded-[5px] w-[244.5px] h-[36px] py-[8px] px-[12px] border border-CardBorder font-poppins"
            type="text"
            value={RemoteType}
            onChange={e=>{UpdateFields({RemoteType: e.target.value})}}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateJob1;
