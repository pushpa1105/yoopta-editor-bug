import Image from "next/image";
import Editor from "./_components/yoopta-editor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Yoopta Editor</h1>
        <Editor />
      </div>
    </main>
  );
}
