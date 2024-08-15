import Assignment from "@/components/Assignment";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-white">
      {/* This is the main component to house the Assignment component */}
      <Assignment />
    </main>
  );
}
