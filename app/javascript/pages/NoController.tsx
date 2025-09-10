import { Switch } from "@mantine/core";

export default function NoController() {
  return (
    <main>
      <h1>Look, Ma! No controller</h1>
      <Switch defaultChecked label="I agree to sell my privacy" />
    </main>
  );
}
