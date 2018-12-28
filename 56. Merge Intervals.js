/**
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a,b)=>a.start-b.start)
    let start = 0
    let end = intervals.length-1
    while(start<end){
        if(intervals[start].end>=intervals[start+1].start){
            if(intervals[start].end<intervals[start+1].end){
                intervals[start].start = intervals[start].start
                intervals[start].end =  intervals[start+1].end 
            }                       
            intervals = [...intervals.slice(0, start+1), ...intervals.slice(start+2)]
            end--
        } else{
            start++
        }        
    }
    return intervals
};
