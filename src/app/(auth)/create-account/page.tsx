import { getAuthUser } from "@/utils/auth";

import CreateAccount from "@/components/pages/create-account";

export default async function CreateAccountPage() {
  const user = await getAuthUser();

  return <CreateAccount />;
}
