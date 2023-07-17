import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Card>
        <h1 className="text-4xl font-bold mb-4">Welcome to Todo App</h1>
        <p className="text-lg text-gray-600">
          Get things done with ease. Organize your tasks efficiently.
        </p>
        <div className="flex justify-end mt-4">
          <span className="text-gray-400 text-sm">
            Made with Next.js and React.js
          </span>
        </div>
      </Card>
    </div>
  );
}
