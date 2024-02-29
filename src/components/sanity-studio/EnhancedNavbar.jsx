import { Stack, Card, Flex, Text } from "@sanity/ui";
import { WarningFilledIcon } from "@sanity/icons";

// Adds markup and invokes renderDefault()
function EnhancedNavbar(props) {
  return (
    <Stack>
      <Card padding={3} tone="caution">
        <Flex justify="center" align={"center"} gap={1}>
          <WarningFilledIcon style={{ fontSize: '1.2rem' }} />
          <Text>This CMS is under development (rough edges ahead).</Text>
        </Flex>
      </Card>
      <>{props.renderDefault(props)}</>
    </Stack>
  );
}

export default EnhancedNavbar;
