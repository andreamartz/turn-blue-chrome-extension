const color = '#59bfff';

/**
 * This code runs when any of the following happens:
 * - the extension is first installed,
 * - the extension is updated to a new version, or
 * - Chrome is updated to a new version
 */
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cblue', `color: ${color}`);
});
