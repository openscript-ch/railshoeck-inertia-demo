import { AppShell, Burger, Group, MantineProvider, Title, createTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";

const theme = createTheme({
  components: {
    ActionIcon: {
      defaultProps: {
        variant: "white",
        size: "xs",
      },
    },
  },
});

export default function AppLayout({ children }: { children: ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>
      <MantineProvider theme={theme} forceColorScheme="light">
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <AppShell.Header>
            <Group h="100%" pl="md" pr="sm" justify="space-between">
              <Title order={2}>Railshöck Demo App</Title>
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            </Group>
          </AppShell.Header>
          <AppShell.Navbar p="md">
            <Navbar />
          </AppShell.Navbar>
          <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
      </MantineProvider>
    </>
  );
}
