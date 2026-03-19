import type { AiSdkRequest } from "../../../shared/ai-sdk";

import { generateAiText } from "../../utils/ai-sdk";

export default eventHandler(async (event) => {
  const body = await readBody<AiSdkRequest>(event);

  return generateAiText(event, body);
});
