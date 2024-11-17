import FormTable from "../component/FormTable";

const CreateEmployee = () => {
  return (
    <div className="w-[100%] pb-10 flex justify-center items-center flex-col gap-10">
      <h1 className="text-3xl tracking-wider text-center text-[#dcdde1]">
        Create New Employee
      </h1>
      <FormTable />
    </div>
  );
};

export default CreateEmployee;
