export const urlForTutorial =
  "https://www.totaltypescript.com/tips/use-in-operator-to-transform-a-union-to-another-union";

export type Entity =
  | {
      type: "user";
    }
  | {
      type: "post";
    }
  | {
      type: "comment";
    };

// manually created
export type EntityWithId =
  | {
      type: "user";
      userId: string;
    }
  | {
      type: "post";
      postId: string;
    }
  | {
      type: "comment";
      commentId: string;
    };

// Dynamically created EntityWithId
type DynamicEntityWithId = {
  [EntityType in Entity["type"]]: {
    type: EntityType;
  } & Record<`${EntityType}Id`, string>;
}[Entity["type"]];

export const result: DynamicEntityWithId = {
  type: "user",
  userId: "asdasd",
};
