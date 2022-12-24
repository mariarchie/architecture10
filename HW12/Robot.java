package HW12;

public class Robot {
    private int robotNumber;
        private int cleaningProgram;

        public Robot (int robotNumber, int cleaningProgram) {
            this.robotNumber = robotNumber;
            this.cleaningProgram = cleaningProgram;
        }

        public int getRobotNumber(){
            return robotNumber;
        }

        public int getCleaningProgram(){
            return cleaningProgram;
        }

        public void setRobotNumber(int robotNumber){
            this.robotNumber = robotNumber;
        }

        public void setCleaningProgram(int cleaningProgram){
            this.cleaningProgram = cleaningProgram;
        }
}
