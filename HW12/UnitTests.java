package HW12;

import static org.junit.jupiter.api.Assertions.assertEquals;

class RobotTest {
    @org.junit.jupiter.api.Test
    void TestGetRobotNumber() {
        Robot robot = new Robot(0231, 2);
        assertEquals(0231, robot.getRobotNumber());
    }

    @org.junit.jupiter.api.Test
    void TestGetCleaningProgram() {
        Robot robot = new Robot(7680, 8);
        assertEquals(8, robot.getCleaningProgram());
    }

    @org.junit.jupiter.api.Test
    void TestSetRobotNumber() {
        Robot robot = new Robot(1675, 1);
        robot.setRobotNumber(1676);
        assertEquals(1676, robot.getRobotNumber());
    }

    @org.junit.jupiter.api.Test
    void TestSetCleaningProgram() {
        Robot robot = new Robot(1675, 1);
        robot.setCleaningProgram(3);
        assertEquals(3, robot.getCleaningProgram());
    }
}
