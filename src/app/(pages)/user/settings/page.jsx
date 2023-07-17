import Button from "@/components/Button";
import Input from "@/components/Input";

function Settings() {
  return (
    <div className="flex items-start justify-center">
      <div className="w-full max-w-3xl bg-white shadow-md rounded p-8 md:w-2/3 lg:w-1/2">
        <div className="flex items-center mb-8">
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold">Update profile</h1>
            <hr className="border-gray-300" />
          </div>
        </div>
        <div className="mb-4">
          <Input type="text" label="Name" id="name" />
        </div>
        <div className="mb-4">
          <Input type="email" label="Email" id="email" />
        </div>
        <div className="mb-4">
          <Input type="number" label="Phone Number" id="PhoneNumber" />
        </div>
        <div className="flex justify-end">
          <Button color="primary">Save Change`s</Button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
