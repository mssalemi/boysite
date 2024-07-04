import React from "react";
import { Banner, Text, List, Link, Tooltip } from "@shopify/polaris";

export function CurrentPlan() {
  return (
    <Banner title="Current Plan" tone="info" onDismiss={() => {}}>
      <div className="space-y-2">
        <Text variant="bodyMd" as="p">
          <Tooltip content="TBD - looking for big ass airbnb close to golf spots">
            <strong>Location:</strong>{" "}
          </Tooltip>
          Somewhere near Toronto and rent a big place to fit everybody and we're
          not tight - although in true Mehdi yolo fashion, I'm doing this last
          minute. Golf courses im thinking are Glen Abbey and TPC Toronto. Was
          thinking Padel/Pickelball too but dont think I can jam it all in one
          day.
        </Text>
        <Text variant="bodyMd" as="p">
          <strong>Location:</strong> Somewhere in Toronto/Mississauga
        </Text>
        <Text variant="bodyMd" as="p">
          <strong>Days:</strong> Aug 23 - Aug 25
        </Text>
        <Text variant="bodyMd" as="p">
          <strong>Description:</strong> A fun-filled weekend with all my Boy's
          and do some fun activities ❤️
        </Text>
        <Text variant="bodyMd" as="p">
          <strong>Mehdi's Bachelor Weekend:</strong>
        </Text>
        <List type="bullet">
          <List.Item>Friday: Arrive - BBQ Dinner at Airbnb. </List.Item>
          <List.Item>
            Saturday:
            <List type="bullet">
              <List.Item>Early Morning Bench Workout</List.Item>
              <List.Item>
                Golf 10ish am tee off at{" "}
                <Link url="https://glenabbey.clublink.ca/about/gallery/">
                  Glen Abbey
                </Link>{" "}
                (Have lunch there after, prob home by 4)
              </List.Item>
              <List.Item>
                Go to base camp, shower, do a lil pre drink for dinner, get a
                corn hole going.
              </List.Item>
              <List.Item>Dinner</List.Item>
              <List.Item>Dinner: Chill and Chess</List.Item>
            </List>
          </List.Item>
          <List.Item>
            Sunday: Early Golf at{" "}
            <Link url="https://www.ospreyvalley.com/hoot">
              TPC Toronto, The Hoot
            </Link>{" "}
            if you want and pce
          </List.Item>
        </List>
      </div>
    </Banner>
  );
}
