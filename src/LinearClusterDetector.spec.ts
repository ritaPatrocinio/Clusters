import {MyLinearClusterDetectorFactory} from "./MyLinearClusterDetector";
import {LinearClusterDetector} from "./LinearClusterDetector";


describe("Basic testing with spacing 2", () => {
    let detector: LinearClusterDetector;
    beforeEach(() => {
        detector = new MyLinearClusterDetectorFactory().create(2);
    });

    it("returns 0 if never called", () => {
        expect(detector.clusterCount()).toEqual(0);
    });

    it("returns 1 if called once", () => {
        detector.accept(1);
        expect(detector.clusterCount()).toEqual(1);
    });

    it("returns 1 if called with overlapping", () => {
        detector.accept(1);
        detector.accept(2);
        expect(detector.clusterCount()).toEqual(1);
    });

    it("returns 2 if called with evidently non-overlapping", () => {
        detector.accept(1);
        detector.accept(4);
        expect(detector.clusterCount()).toEqual(2);
    });
});




describe("Basic testing with spacing 5", () => {
    let detector: LinearClusterDetector;
    beforeEach(() => {
        detector = new MyLinearClusterDetectorFactory().create(5);
    });

    it("returns 0 if never called", () => {
        expect(detector.clusterCount()).toEqual(0);
    });

    it("returns 1 if called once", () => {
        detector.accept(1);
        expect(detector.clusterCount()).toEqual(1);
    });

    it("returns 1 if called with overlapping", () => {
        detector.accept(0);
        detector.accept(1);
        expect(detector.clusterCount()).toEqual(1);
    });

    it("returns 2 if called with evidently non-overlapping", () => {
        detector.accept(5);
        detector.accept(-5);
        expect(detector.clusterCount()).toEqual(2);
    });
    it("New number that lands between two nearby clusters may belong to both of them, thus merging them into one", () => {
        detector.accept(5);
        detector.accept(-5);
        detector.accept(0);
        expect(detector.clusterCount()).toEqual(1);
        expect(detector.cluster()).toEqual([ [ 5, -5, 0 ] ])
    });
    it("returns 5 if called with evidently non-overlapping", () => {
        detector.accept(100);
        detector.accept(0);
        detector.accept(7);
        detector.accept(-89);
        detector.accept(80);
        detector.accept(86);
        detector.accept(-100);
        detector.accept(2);
        detector.accept(81);
        expect(detector.clusterCount()).toEqual(5);
    });
});




describe("Basic testing with spacing 10", () => {
    let detector: LinearClusterDetector;
    beforeEach(() => {
        detector = new MyLinearClusterDetectorFactory().create(10);
    });

    it("returns 0 if never called", () => {
        expect(detector.clusterCount()).toEqual(0);
    });

    it("returns 1 if called once", () => {
        detector.accept(1);
        expect(detector.clusterCount()).toEqual(1);
    });

    it("returns 1 if called with overlapping", () => {
        detector.accept(0);
        detector.accept(1);
        expect(detector.clusterCount()).toEqual(1);
    });

    it("returns 2 if called with evidently non-overlapping", () => {
        detector.accept(1);
        detector.accept(100);
        detector.accept(10);
        expect(detector.clusterCount()).toEqual(2);
    });
});

