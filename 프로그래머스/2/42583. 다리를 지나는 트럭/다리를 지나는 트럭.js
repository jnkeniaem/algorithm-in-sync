function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const trucksInQueue = [...truck_weights];

  const trucksOnBridgeQueue = []; // {weight, mileage}
  let trucksOnBridgeWeight = 0;
  let trucksInQueueIdx = 0; // trucksInQueue 실제로 shift 안해도 됨.
  let trucksOnBridgeIdx = 0; // trucksOnBridgeQueue 실제로 shift 안해도 됨.
  // while (trucksInQueue.length || trucksOnBridgeQueue.length) {
  let idx = 0;
  while (
    trucksInQueueIdx !== trucksInQueue.length ||
    trucksOnBridgeIdx !== trucksOnBridgeQueue.length
  ) {
    /*
      매번 확인해야하는 것
      최대 bridge_length만큼 && weight 이하만큼 다리에 올라갈 수 있음
      1. 내릴 트럭 - 올라탄 트럭 mileage 확인
      2. 올라탄 트럭 mileage 업데이트
      3. 올라 탈 트럭

      내림과 동시에 탑승 가능
     */

    /*
    내리는 조건 : trucksOnBridgeQueue에 있는 트럭이 bridge_length만큼 건넜는지.
    내릴때
    - trucksOnBridgeWeight, trucksOnBridgeIdx 업데이트
    */
    for (let i = trucksOnBridgeIdx; i < trucksOnBridgeQueue.length; ++i) {
      if (trucksOnBridgeQueue[i].mileage == bridge_length) {
        // 내려야 함
        trucksOnBridgeWeight -= trucksOnBridgeQueue[i].weight;
        trucksOnBridgeIdx++;
      }
    }

    const trucksOnBridgeLen = trucksOnBridgeQueue.length;

    // 2. 올라탄 트럭 mileage 업데이트
    for (let i = trucksOnBridgeIdx; i < trucksOnBridgeLen; ++i) {
      trucksOnBridgeQueue[i].mileage += 1;
    }
    /*
    1. bridge 올라가도 되는지 확인하고
    2. 올라가기
    1? 더 실을 수 있으면 싣기
    */

    // available trucks
    const availableLen =
      bridge_length - (trucksOnBridgeLen - trucksOnBridgeIdx);
    const availableWeight = weight - trucksOnBridgeWeight;

    const curTruck = trucksInQueue[trucksInQueueIdx];
    if (availableLen && availableWeight >= curTruck) {
      // 올라타.
      // trucksOnBridgeWeight,trucksOnBridgeQueue 업데이트
      trucksOnBridgeQueue.push({ weight: curTruck, mileage: 1 });
      trucksInQueueIdx++;
      trucksOnBridgeWeight += curTruck;
    }

    time++;
    idx++;
  }

  return time;
}