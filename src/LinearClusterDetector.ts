export interface LinearClusterDetectorFactory {
    create(spacing: number): LinearClusterDetector;
}

export interface LinearClusterDetector {
    /*
        This method will be repeatedly called to provide new data points.
     */
    accept(value: number): void;

    /*
        This method returns the number of clusters detected so far.
        It may be called multiple times while new data keeps flowing in.
     */
    clusterCount(): number;
    cluster(): Array<Array<number>>;
}
