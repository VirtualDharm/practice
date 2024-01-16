// 'Stock buy and sell'
// let result = new Array
// function checkMaxdiff(arr,m,p,q){
//     let i,j,maxprofit=0,y,z
//     for(i=0;i<p;i++){
//         if(arr[i][3]==m){
//             if(maxprofit<arr[i][4]){
//                 maxprofit=arr[i][4]
//                 y=arr[i][0]
//                 z=arr[i][1]
//             }
//         }
//     }
//     result.push([y,z])
// }
// function stockBuySell(arr,n){
//     let i,j
//     let dif = new Array
//     for(i=0;i<n-1;i++){
//         for(j=i+1;j<n;j++){
//             dif.push([i,j,arr[i],arr[j],arr[j]-arr[i]])
//         }
//     }
//     for(i=0;i<n-1;i++){
//         checkMaxdiff(dif,dif[i][3],dif.length,5)
//     }
//     console.log(result)
//     result = []
// }
// N=7
// Arr=[100,180,260,310,40,535,695]
// stockBuySell(Arr,N)
// N1=5
// Arr1=[4,2,2,2,4]
// stockBuySell(Arr1,N1)
// #########################################################
// Convert array into Zig-Zag fashion
// function zigZag(arr,n){
//     arr=arr.slice()
//     arr.sort((a,b)=>a-b)
//     for(i=0;i<n/2;i=i+2){
//         temp=arr[i+1]
//         arr[i+1]=arr[n-i-1]
//         arr[n-i-1]=temp
//         console.log(arr[i+1],arr[n-i-1])
//     }
//     console.log(arr)
// }
// Arr=[4, 3, 7, 8, 6, 2, 1]
// zigZag(Arr,7)
// Arr1=[1, 4, 3, 2]
// zigZag(Arr1,4)
// #######################################################
// Spirally traversing a matrix
// function spirallyTraverse(matrix, r, c) {
//     const result = [];
//     let top = 0, bottom = r - 1, left = 0, right = c - 1;
//     while (top <= bottom && left <= right) {
//         // Traverse from left to right
//         for (let i = left; i <= right; i++) {
//             result.push(matrix[top][i]);
//         }
//         top++;
//         // Traverse from top to bottom
//         for (let i = top; i <= bottom; i++) {
//             result.push(matrix[i][right]);
//         }
//         right--;
//         // Traverse from right to left
//         if (top <= bottom) {
//             for (let i = right; i >= left; i--) {
//                 result.push(matrix[bottom][i]);
//             }
//             bottom--;
//         }
//         // Traverse from bottom to top
//         if (left <= right) {
//             for (let i = bottom; i >= top; i--) {
//                 result.push(matrix[i][left]);
//             }
//             left++;
//         }
//     }
//     return result;
// }
// const matrix1 = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];
// console.log(spirallyTraverse(matrix1, 4, 4));
// const matrix2 = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ];
// console.log(spirallyTraverse(matrix2, 3, 4));
// #######################################################
// Largest Number formed from an Array
// function printLargest(arr) {
//     arr.sort((a, b) => {
//         let ab = String(a) + String(b);
//         let ba = String(b) + String(a);
//         return ba.localeCompare(ab);
//     });
//     console.log(arr)
//     return arr.join('');
// }
// let arr1 = [3, 30, 34, 5, 9];
// console.log(printLargest(arr1)); // Output: 9534330
// let arr2 = [54, 546, 548, 60];
// console.log(printLargest(arr2)); // Output: 6054854654
// ##########################################################
// Queue using two Stacks
// function twoIntoOne(arr){
//     let i = 0,tm
//     let result = new Array
//     let temp = new Array
//     while(arr[i]){
//         if(arr[i]==1){
//             result.push(arr[i+1])
//             i++
//         }else if(arr[i]==2){
//             tm = result.pop()
//             if(String(tm).localeCompare('undefined')==0){
//                 temp.push(-1)
//             }
//             else{
//                 temp.push(tm)
//             }
//         }
//         i++
//     }
//     console.log(temp)
// }
// Arr=[1,2,1,3,2,1,4,2]
// twoIntoOne(Arr)
// Arr1=[1,2,2,2,1,4]
// twoIntoOne(Arr1)
// #################################################################
// Maximum of all subarrays of size k
// function max_of_subarrays(arr,n,k){
//     let i = 0
//     let check = new Array
//     for(i=0;i<n-k+1;i++){
//         check.push(arr.slice(i,i+3))
//     }
//     for(i=0;i<check.length;i++){
//         max=check[i][0]
//         for(j=1;j<k;j++){
//             if(check[i][j]>max){
//                 max=check[i][j]
//             }
//         }
//         console.log(max)
//     }
// }
// N = 9, K = 3
// Arr = [1,2,3,1,4,5,2,3,6]
// max_of_subarrays(Arr,N,K)// 3 3 4 5 5 5 6
// N1 = 10, K1 = 4
// Arr1 = [8,5,10,7,9,4,15,12,90,13]
// max_of_subarrays(Arr1,N1,K1)// 10 10 10 15 15 90 90
// ######################################################################
// Number of paths
// function numberOfPaths(x, y, m, n) {
//     if (x === m - 1 && y === n - 1) {
//         return 1;
//     }
//     let paths = 0;
//     if (y + 1 < n) {
//         paths += numberOfPaths(x, y + 1, m, n);
//     }
//     if (x + 1 < m) {
//         paths += numberOfPaths(x + 1, y, m, n);
//     }
//     return paths;
// }
// // Example usage:
// const M = 3, N = 3;
// console.log(numberOfPaths(0, 0, M, N));  // Output: 6
// const M1 = 4, N1 = 5;
// console.log(numberOfPaths(0, 0, M1, N1));  // Output: 35
// ##############################################################
// Combination Sum II
// function combinationSum2(arr, N, K) {
//     const result = [];
//     const currentCombination = [];
//     arr.sort((a, b) => a - b); 
//     backtrack(0, K);
//     return result;
//     function backtrack(startIndex, target) {
//         if (target === 0) {
//             result.push([...currentCombination]);
//             return;
//         }
//         for (let i = startIndex; i < N; i++) {
//             if (i > startIndex && arr[i] === arr[i - 1]) {
//                 continue;
//             }
//             if (arr[i] > target) {
//                 break;
//             }
//             currentCombination.push(arr[i]);
//             backtrack(i + 1, target - arr[i]);
//             currentCombination.pop();
//         }
//     }
// }
// const arr1 = [1, 2, 3, 3, 5];
// console.log(combinationSum2(arr1,5,7));
// const arr2 = [5, 10, 15, 20, 25, 30];
// console.log(combinationSum2(arr2,6,35));
// ###################################################################
// Special Keyboard
// function optimalKeys(N){
//     if(N<=6){
//         return N
//     }
//     let dp = new Array(N + 1).fill(0)
//     for (let i = 7; i <= N; i++) {
//         for (let j = 1; j <= i - 3; j++) {
//             dp[i] = Math.max(dp[i], (i - j - 1) * dp[j]);
//         }
//     }
//   return dp[N];
// }
// console.log(optimalKeys(3)); // Output: 3
// console.log(optimalKeys(7)); // Output: 9
// ###################################################################
// Finding middle element in a linked list
// class listNode{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }
// function getMiddle(head){
//     if(!head){
//         return
//     }
//     let slow = head
//     let fast = head
//     while(fast!==null&&fast.next!==null){
//         slow=slow.next
//         fast=fast.next.next
//     }
//     return slow.data
// }
// let head = new listNode(1)
// head.next = new listNode(2)
// head.next.next = new listNode(3)
// head.next.next.next = new listNode(4)
// head.next.next.next.next = new listNode(5)
// console.log(getMiddle(head))
// let head1 = new listNode(2)
// head1.next = new listNode(4)
// head1.next.next = new listNode(6)
// head1.next.next.next = new listNode(7)
// head1.next.next.next.next = new listNode(5)
// head1.next.next.next.next.next = new listNode(1)
// console.log(getMiddle(head1))
// ###################################################################
// Sort an array according to the other
// let res = new Array
// function checkAnother(a,arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==a){
//             res.push(a)
//         }
//     }
// }
// function sortA1ByA2(arr,arr1,n,m){
//     let i,j
//     let res1 = new Array
//     for(i=0;i<n;i++){
//         if(arr1.includes(arr[i])){
//             if(!res.includes(arr[i]),arr[i]){
//                 res.push(arr[i])
//                 rem=arr.slice(i+1,n)
//                 if(rem.length>0){
//                     checkAnother(arr[i],rem)
//                 }
//             }
//         }else{
//             res1.push(arr[i])
//         }
//     }
//     res1.sort((a,b)=>a-b)
//     res=[...res,...res1]
//     return res
// }
// A1 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8]
// A2 = [2, 1, 8, 3]
// console.log(sortA1ByA2(A1,A2,11,4)) //2 2 1 1 8 8 3 5 6 7 9
// A3 = [2, 1, 2, 5, 7, 1, 9, 3, 6, 8, 8]
// A4 = [99, 22, 444, 56]
// res = []
// console.log(sortA1ByA2(A3,A4,11,4)) //1 1 2 2 3 5 6 7 8 8 9
// ####################################################################
// ####################################################################
// Sorting Elements of an Array by Frequency
// function frequencySort(t,arr){
//     for(let i=0;i<t;i++){
//         let newarr = new Array
//         let resMap = new Map()
//         n=arr[i][0]
//         newarr=arr[i][1]
//         for(let j=0;j<n;j++){
//             if(resMap.has(newarr[j])){
//                 resMap.set(newarr[j],resMap.get(newarr[j])+1)
//             }else{
//                 resMap.set(newarr[j],1)
//             }
//         }
//         arr.sort((a,b)=>{
//             if(resMap.get(a)!==resMap.get(b)){
//                 return resMap(b)-resMap(a)
//             }
//             return a-b
//         })
//         console.log(resMap)
//     }
// }
// n=2
// arr=[
//     [5,[5,5,4,6,4]],
//     [5,[9,9,9,2,5]]
// ]
// frequencySort(n,arr)
// ##################################################################

