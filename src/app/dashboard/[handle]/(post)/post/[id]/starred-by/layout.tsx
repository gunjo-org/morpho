import Layout from "@/containers/Layout";

export default function StarredByLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
