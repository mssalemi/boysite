import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState, useCallback } from "react";
import { BlockStack, Card, Layout, Page, Tabs, Text } from "@shopify/polaris";
import { BOI_ORIGIN_CATEGORY } from "../utils/types";
import { brothers } from "~/utils/bois";
import { BachelorBoiDisplay } from "~/components/BachelorBoiDisplay";
import { IntroContent } from "~/components/IntroContent";
import { CurrentPlan } from "~/components/CurrentPlan";

export const meta: MetaFunction = () => {
  return [
    { title: "MEHDI BACHELOR" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = useCallback((selectedTabIndex: number) => {
    setSelectedTab(selectedTabIndex);
  }, []);

  const categories = [
    { id: "all", content: "All", panelID: "all-content" },
    { id: "ottawa-bois", content: "Ottawa", panelID: "ottawa-boys-content" },
    { id: "toronto-bois", content: "Toronto", panelID: "toronto-boys-content" },
    { id: "family", content: "Fam", panelID: "family-content" },
  ];

  const selectedCategory = categories[selectedTab].id as BOI_ORIGIN_CATEGORY;

  useEffect(() => {
    console.log("Selected Category: ", selectedCategory);
    console.log("Selected Tab: ", selectedTab);
  }, [selectedCategory, selectedTab]);

  const filteredBois = brothers?.filter((boi) => {
    if (selectedCategory === "all") return true;
    return boi.category === selectedCategory;
  });

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <IntroContent />
        </Layout.Section>
        <Layout.Section>
          <CurrentPlan />
        </Layout.Section>
        <Layout.Section>
          <Card roundedAbove="sm">
            <BlockStack gap="200">
              <Text variant="heading2xl" as="h3" tone="magic">
                Get to know the boi's!
              </Text>
              <Text variant="headingXl" as="h3" tone="magic-subdued">
                Guest List
              </Text>
            </BlockStack>
            <Tabs
              tabs={categories.map((category) => ({
                id: category.id,
                content: category.content,
                panelID: category.panelID,
              }))}
              selected={selectedTab}
              onSelect={handleTabChange}
            >
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredBois.map((boi, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow">
                      <BachelorBoiDisplay boi={boi} />
                    </div>
                  ))}
                </div>
              </div>
            </Tabs>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
