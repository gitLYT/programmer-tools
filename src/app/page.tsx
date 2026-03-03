import Link from "next/link";

const tools = [
  {
    name: "JSON Formatter",
    description: "Format and validate JSON data.",
    path: "/tools/json-formatter",
  },
  {
    name: "Base64 Encoder/Decoder",
    description: "Encode and decode Base64 strings.",
    path: "/tools/base64",
  },
  {
    name: "Timestamp Converter",
    description: "Convert Unix timestamps to human-readable dates and vice versa.",
    path: "/tools/timestamp",
  },
];

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Programmer Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link key={tool.path} href={tool.path} className="block group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-white h-full group-hover:border-blue-500">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">{tool.name}</h2>
              <p className="text-gray-600">{tool.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
