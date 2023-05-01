type UserData = {
  Experience: {
    min: string;
    max: string;
  };
  Salary: {
    min: string;
    max: string;
  };
  TotalEmployee: string;
  ApplyType: string;
};
type UserFormProps = UserData & {
  UpdateFields: (fields: Partial<UserData>) => void;
};

export default function CreateJob2({
  Experience,
  Salary,
  TotalEmployee,
  ApplyType,
  UpdateFields,
}: UserFormProps) {
  return (
    <div>
      <div className="flex flex-col mb-[24px]">
        <p className="text-[14px]/[20px] font-poppins font-[500]">Experience</p>
        <div className="flex flex-row justify-between">
          <input
            placeholder="Minimum"
            className="rounded-[5px] w-[244.5px] h-[36px] py-[8px] px-[12px] border border-bdrcolor font-poppins"
            type="string"
            value={Experience.min}
            onChange={(e) => {
              UpdateFields({
                Experience: {
                  min: (e.target.value),
                  max: Experience.max,
                },
              });
            }}
          />
          <input
            placeholder="Maximum"
            className="rounded-[5px] w-[244.5px] h-[36px] py-[8px] px-[12px] border border-bdrcolor font-poppins"
            type="string"
            value={Experience.max}
            onChange={(e) => {
              UpdateFields({
                Experience: {
                  min: Experience.min,
                  max: (e.target.value),
                },
              });
            }}
          />
        </div>
      </div>

      <div className="flex flex-col mb-[24px]">
        <p className="text-[14px]/[20px] font-poppins font-[500]">Salary</p>
        <div className="flex flex-row justify-between">
          <input
            placeholder="Minimum"
            className="rounded-[5px] w-[244.5px] h-[36px] py-[8px] px-[12px] border border-bdrcolor font-poppins"
            type="string"
            value={Salary.min}
            onChange={(e) => {
              UpdateFields({
                Salary: { min: (e.target.value), max: Salary.max },
              });
            }}
          />
          <input
            placeholder="Maximum"
            className="rounded-[5px] w-[244.5px] h-[36px] py-[8px] px-[12px] border border-bdrcolor font-poppins"
            type="string"
            value={Salary.max}
            onChange={(e) => {
              UpdateFields({
                Salary: { min: Salary.min, max: (e.target.value) },
              });
            }}
          />
        </div>
      </div>

      <div className="flex flex-col mb-[24px]">
        <p className="text-[14px]/[20px] font-poppins font-[500]">
          Total employee
        </p>
        <input
          placeholder="ex. 100"
          className="rounded-[5px] w-[513px] h-[36px] py-[8px] px-[12px] border border-bdrcolor font-poppins"
          type="string"
          value={TotalEmployee}
          onChange={(e) => {
            UpdateFields({ TotalEmployee: (e.target.value) });
          }}
        />
      </div>

      <div className="flex flex-col justify-between mb-[24px]">
        <p className="text-[14px]/[20px] font-poppins font-[500] mb-[4px]">
          Apply type
        </p>

        <div className="flex flex-row font-poppins">
          <input
            className="w-[20px] h-[20px] mr-[4px]"
            name="applyType"
            type="radio"
            value={ApplyType}
            onChange={() => {
              UpdateFields({ ApplyType: "Quick Apply" });
            }}
          />
          <label
            htmlFor="Quick Apply"
            className="font-poppins font-[400] font-[14px]/[20px] text-gray-400 mr-[16px]"
          >
            Quick Apply
          </label>

          <input
            className="w-[20px] h-[20px] mr-[4px]"
            name="applyType"
            type="radio"
            value={ApplyType}
            onChange={() => {
              UpdateFields({ ApplyType: "Extenal Apply" });
            }}
          />
          <label
            htmlFor="External"
            className="font-poppins font-[400] font-[14px]/[20px] text-gray-400"
          >
            External
          </label>
        </div>
      </div>
    </div>
  );
}
