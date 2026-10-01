export * as ProviderEventV1 from "./provider-event"

import { Schema } from "effect"
import { Event } from "../event"

export const Updated = Event.define({
  type: "provider.updated",
  schema: { providerIDs: Schema.Array(Schema.String) },
})

export const Definitions = Event.inventory(Updated)
