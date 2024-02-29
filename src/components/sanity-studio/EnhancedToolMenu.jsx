import { Flex, Button } from "@sanity/ui";
import { RocketIcon } from "@sanity/icons";

export default function EnhancedToolMenu(props) {
  return (
    <Flex justify={"space-between"}>
      <>{props.renderDefault(props)}</>
      <Button
        fontSize={[2, 2, 3]}
        iconRight={RocketIcon}
        text="Deploy"
        tone="primary"
      />
    </Flex>
  );
}
