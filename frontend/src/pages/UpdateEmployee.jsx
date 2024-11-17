import FormTable from "../component/FormTable";

const UpdateEmployee = () => {
  return (
    <div className="w-[100%] pb-10 flex justify-center items-center flex-col gap-10">
      <h1 className="text-3xl tracking-wider text-center text-[#dcdde1]">
        Update Employee
      </h1>
      <FormTable />
    </div>
  );
};

export default UpdateEmployee;
