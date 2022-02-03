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

#   C l u s t e r s  
 #   C l u s t e r s  
 