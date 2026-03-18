// Example of a cached event handler
// Learn more on https://nitro.unjs.io/guide/cache

export default cachedEventHandler( async () => {
  // Sleep 2 seconds to simulate a long-running operation
  await new Promise(resolve => setTimeout(resolve, 2000));

  return {
    now: Date.now(),
    value: Math.random(),
  }
}, {
  maxAge: 5, // 5 seconds
})
