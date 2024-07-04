import React from "react";
import { Card, BlockStack, Text } from "@shopify/polaris";

export function IntroContent() {
  return (
    <Card roundedAbove="sm">
      <BlockStack gap="400">
        <BlockStack gap="200">
          <Text as="h2" variant="headingLg">
            Mehdi's Bachelor Weekend
          </Text>
          <Text as="p" variant="bodyMd">
            Welcome bois! Randomly decided to make this site to keep track of
            the current plan. As you know, I'm horrible at planning this.
          </Text>
          <Text as="p" variant="bodyMd">
            Let's get lit and do some sports!
          </Text>
        </BlockStack>
      </BlockStack>
    </Card>
  );
}
