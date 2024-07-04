import React from "react";
import { Banner, Text, List } from "@shopify/polaris";

export function CurrentPlan() {
  return (
    <Banner title="Current Plan" tone="info" onDismiss={() => {}}>
      <div className="space-y-2">
        <Text variant="bodyMd" as="p">
          <strong>Location:</strong> Somewhere near Toronto - Muskoka? - PEC -
          Ottawa if that's easy rent a big place to fit everybody and we're not
          tight - although in true Mehdi yolo fashion, I'm doing this last
          minute.
        </Text>
        <Text variant="bodyMd" as="p">
          <strong>Days:</strong> Aug 23 - Aug 25
        </Text>
        <Text variant="bodyMd" as="p">
          <strong>Description:</strong> A fun-filled weekend with all my Boy's
          and do some fun activities ❤️
        </Text>
        <Text variant="bodyMd" as="p">
          <strong>Activities:</strong>
        </Text>
        <List type="bullet">
          <List.Item>Friday: Arrive - BBQ Dinner at Airbnb and chill</List.Item>
          <List.Item>
            Saturday:
            <List type="bullet">
              <List.Item>Maybe bench in morning lol</List.Item>
              <List.Item>
                Golf 9-10ish am tee off (Have lunch there after, prob finish
                3pm){" "}
              </List.Item>
              <List.Item>
                Go to base camp, shower, get ready for padel Tournament
              </List.Item>
              <List.Item>Padel 5-7pm</List.Item>
              <List.Item>Post padel drinks at Airbnb</List.Item>
              <List.Item>Dinner</List.Item>
              <List.Item>Chess / Cornhole at night</List.Item>
            </List>
          </List.Item>
          <List.Item>
            Sunday: Early Golf (if you want) - brunch and pce
          </List.Item>
        </List>
      </div>
    </Banner>
  );
}
