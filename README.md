# Space and Time complexity

Since the constant distances uses two iterations (two map functions), the computational bottleneck will be here. The number of times the callback function inside the first map will run depends on the size of the data array, which is the number of clusters (this function returns the minimum distance of each cluster to the new value received). The number of times the callback function inside the second map will run depends on the number of values received (this function calculates the distance between the new value and each value previously received).
For the numOfNotBelong constant another iteration is performed on the distances constant. For this constant we loop through the whole array to filter the values (distances) that are bigger than the spacing. The number of times the callback function inside the filter will run is the same as the number of clusters.
The complexity of these mentioned processes corresponds to O(C*V + C) = O(C*V), where C is the number of clusters and V is the number of values previously received. In the case where each value is its own cluster, the complexity becomes O(V^2 +C) = O(V^2).
The optimistic case will occur if the new value is the first to be provided (V=0). In this case the callback functions will not have to be executed.
The average case occurs when the new value is not the first (v=/0) and it doesn't belong to any cluster: O(C*V).
The first pessimistic case occurs when the new value received already belongs to one cluster. In which case, we must loop through the data array to find out which cluster it belongs to: O(C*V + 2C) = O(C*V).
The second pessimistic case occurs when the new value received belongs to two different clusters (two distances are smaller than the spacing). In this case, we must loop through the data array to find out which two clusters it belongs to: O(C*V + 2C) = O(C*V).






# Linear Cluster Detector

We are processing a stream of numbers to see how many clusters they form.

A number belongs to an existing cluster (joins it) if its distance to at least one number already in the cluster is **not greater** than the preconfigured **_spacing_**.  
If the new number (data point) does not belong to any already identified cluster, it becomes a new one.  
New number that lands between two nearby clusters may belong to both of them, thus merging them into one.

We are interested in the amount of clusters detected so far.

### Examples

Following examples are made for _spacing_ = **10**

|               Points | Clusters |
|---------------------:|---------:|
|       [] (_no data_) |        0 |
| [1] (_single point_) |        1 |
|               [0, 1] |        1 |
|         [1, 100, 10] |        2 |

More examples for _spacing_ = **5**

|               Points | Clusters |
|---------------------:|---------:|
|             [ 5, -5] |        2 |
|          [ 5, -5, 0] |        1 |
| [100, 0, 7, -89, 80, 86, -100, 2, 81] | 5 |

### Constraints

The data we process has the following constraints:

* **spacing** is a non-negative, finite, valid number (in JavaScript sense),
* **values** (points) are finite, valid numbers.

## The Task

Please create a class implementing the `LinearClusterDetector` interface.  
Instances of this class should be created by the `MyLinearClusterDetectorFactory.create()`

There are some tests already implemented in `LinearClusterDetector.spec.ts` for your convenience.

Your implementation should validate the input and throw an `Error` should your code be called with a value that is invalid (not conforming to the aforementioned constraints).

Please note that:

* there is **no upper bound** defined for the number of data points that will be passed to your class,
* the `countClusters()` method may be called multiple times, potentially after every call to `accept()`,
* you may expect that the number of clusters won't exceed 2^20.

#??? ???C???l???u???s???t???e???r???s???
???
???#??? ???C???l???u???s???t???e???r???s???
???
???
