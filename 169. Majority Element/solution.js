// Time: O(n)
// Space: O(n)

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        map = {}

        majority = 0
        max = float('-inf')

        for element in nums:
            if element in map:
                map[element] += 1
            else:
                map[element] = 1

        print(map)
        for key, value in map.items():
            if value > max:
                max = value
                majority = key
        
        return majority