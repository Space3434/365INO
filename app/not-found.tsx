import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-white px-5 py-20 text-center">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">404</p>
        <h1 className="mt-4 text-5xl font-black text-navy">Page not found</h1>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-600">
          The page you are looking for may have moved, or the address may be incorrect.
        </p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex rounded-md bg-navy px-5 py-3 text-sm font-black text-white hover:bg-cyan-800"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
