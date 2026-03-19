import type { AiSdkRequest } from "../../../shared/ai-sdk";

import { streamAiText } from "../../utils/ai-sdk";

export default eventHandler(async (event) => {
  const body = await readBody<AiSdkRequest>(event);

  return streamAiText(event, body);
});
