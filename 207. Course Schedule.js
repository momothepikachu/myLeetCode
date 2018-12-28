/**
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
Note:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
 * */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let courses = []
    class Course {
        constructor(){
            this.prerequisitesTotal=0
            this.isPrerequisitedFor=[]
            this.clear=false
        }
    }
    for(let i=0; i<numCourses; i++){
        courses.push(new Course())
    }
    prerequisites.forEach(([a,b])=>{
        courses[a].prerequisitesTotal++
        courses[b].isPrerequisitedFor.push(courses[a])
    })
    let finished=0
    let prev=-1
    while(finished>prev){
        prev=finished
        for(let i of courses){
            if(i.prerequisitesTotal==0 && !i.clear){
                finished++
                i.clear=true
                for(let j of i.isPrerequisitedFor){
                    j.prerequisitesTotal--
                }
            }
        }
    }
    return finished==numCourses
};

