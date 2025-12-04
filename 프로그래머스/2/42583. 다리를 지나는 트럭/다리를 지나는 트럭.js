function solution(bridge_length, weight, truck_weights) {
  let elapsedTime = 0;
  const waitingTrucks = [...truck_weights];
  let waitingFront = 0;
  const trucksOnBridge = []; // {weight, mileage}
  let OnBridgeFront = 0;
  let availableWeight = weight;

  while (
    waitingFront !== waitingTrucks.length ||
    OnBridgeFront !== trucksOnBridge.length
  ) {
    /*
      매번 확인해야하는 것
      1. 내릴 트럭 판별하고 내리기 by 올라탄 트럭 mileage 확인
      2. 올라탄 트럭 mileage 업데이트
      3. 올라 탈 트럭 판별하고 올리기
     */

    // 내릴 트럭 판별하고 내리기
    for (let i = OnBridgeFront; i < trucksOnBridge.length; ++i) {
      // 내리는 조건 : trucksOnBridgeQueue에 있는 트럭이 bridge_length만큼 건넜는지.
      if (trucksOnBridge[i].mileage == bridge_length) {
        // 내려야 함
        availableWeight += trucksOnBridge[i].weight;
        OnBridgeFront++;
      } else {
        // 올라탄 트럭 mileage 업데이트
        trucksOnBridge[i].mileage += 1;
      }
    }

    const trucksOnBridgeLen = trucksOnBridge.length;

    // 올라 탈 트럭 판별하고 올리기
    const hasSpace = trucksOnBridgeLen - OnBridgeFront < bridge_length;

    const curTruck = waitingTrucks[waitingFront];
    if (hasSpace && availableWeight >= curTruck) {
      // 다리로 이동
      trucksOnBridge.push({ weight: curTruck, mileage: 1 });
      waitingFront++;
      availableWeight -= curTruck;
    }

    elapsedTime++;
  }

  return elapsedTime;
}