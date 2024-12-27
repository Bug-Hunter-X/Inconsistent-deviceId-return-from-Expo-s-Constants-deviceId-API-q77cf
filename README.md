# Inconsistent deviceId Return from Expo's Constants.deviceId API

This repository demonstrates a bug in Expo's `Constants.deviceId` API where the returned device ID is sometimes `undefined` or `null`, leading to inconsistencies in applications that rely on unique device identification.

## Bug Description

The `Constants.deviceId` API, intended to provide a unique identifier for each device, unexpectedly returns `undefined` or `null` intermittently.  This behavior is not consistent across devices or platforms, making it difficult to reproduce and debug reliably.

## Reproduction Steps

1. Clone this repository.
2. Run the app on both iOS and Android simulators/devices.
3. Observe the inconsistent return values of `Constants.deviceId`.

## Workaround

The provided solution implements a workaround that stores the device ID in AsyncStorage upon first retrieval.  Subsequent calls retrieve the ID from storage, ensuring consistency even if the Expo API returns null unexpectedly.

## Note

This workaround compromises the possibility of detecting actual device ID changes (though this scenario is unlikely).  A more robust solution might involve using another unique device identifier along with error handling and logging.

## Solution

The solution file (`bugSolution.js`) demonstrates the workaround that improves reliability by using AsyncStorage.