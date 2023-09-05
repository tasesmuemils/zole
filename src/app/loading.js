import Spinner from "./Spinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  <main className="bg-white transition-all duration-500 dark:bg-slate-800 flex relative min-h-screen flex-col items-center justify-center px-5 py-24">
    <Spinner />
  </main>;
}
