import { Flex, Text } from "@sanity/ui";

export default function BrandLogo() {
  return (
    <Flex gap={2} wrap={'nowrap'} align={'center'} paddingX={3}>
      <img height={35} src="https://d1rem61pdixo0z.cloudfront.net/website-cdn/public/img/shared/footer/static/logo-sp.svg" alt="" className="logo-sp"/>
      <Text size={4} weight={'bold'}>Whatmore</Text>
    </Flex>
  );
}
