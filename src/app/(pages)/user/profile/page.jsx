import Button from "@/components/Button";
import Card from "@/components/Card";

function Profile() {
  const user = {
    name: "John Doe",
    phoneNumber: "123-456-7890",
    email: "johndoe@example.com",
    accountCreatedDate: "July 10, 2023",
    todoCount: 5,
  };

  return (
    <div className="flex items-start justify-center">
      <div className="w-full max-w-3xl md:w-2/3 lg:w-1/2 relative">
        <Card>
          <div className="flex items-center flex-wrap mb-8">
            <div className="absolute top-0 right-0 mt-4 mr-4 ">settings</div>
            <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 md:mb-0 md:mr-4"></div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold">{user.name}</h1>
            </div>
          </div>
          <div className="flex flex-wrap mb-2">
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <div className="max-w-fit px-4 py-2 rounded-md bg-gray-300">
                <p className="text-gray-700 text-sm font-medium">
                  Email: {user.email}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="max-w-fit px-4 py-2 rounded-md bg-gray-300">
                <p className="text-gray-700 text-sm font-medium">
                  Joined date: {user.accountCreatedDate}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2 mb-2 md:mb-0">
              <div className="max-w-fit px-4 py-2 rounded-md bg-gray-300">
                <p className="text-gray-700 text-sm font-medium">
                  Phone number: {user.phoneNumber}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="max-w-fit px-4 py-2 rounded-md bg-gray-300">
                <p className="text-gray-700 text-sm font-medium">
                  Total of todos: {user.todoCount}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button color="danger">Delete Account</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
