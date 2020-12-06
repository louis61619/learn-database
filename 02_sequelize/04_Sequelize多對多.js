const { Sequelize, DataTypes, Model, Op } = require('sequelize')

const sequelize = new Sequelize("coderhub", "root", "123", {
  host: 'localhost',
  dialect: 'mysql'
})

//student
class Student extends Model {}
Student.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNotNull: false
  },
  age: DataTypes.INTEGER,
}, {
  tableName: 'student',
  createdAt: false,
  updatedAt: false,
  sequelize
})

//course
class Course extends Model {}
Course.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNotNull: false
  },
  price: DataTypes.DOUBLE
}, {
  tableName: 'courses',
  createdAt: false,
  updatedAt: false,
  sequelize
})

//student course 
class StudentCourse extends Model {}
StudentCourse.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  studentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Student,
      key: 'id'
    },
    field: 'student_id'
  },
  courseId: {
    type: DataTypes.INTEGER,
    references: {
      model: Course,
      key: 'id'
    },
    field: 'course_id'
  }
}, {
  tableName: 'student_select_course',
  createdAt: false,
  updatedAt: false,
  sequelize
})

// 多對多關係的聯繫
Student.belongsToMany(Course, {
  through: StudentCourse,
  foreignKey: 'studentId',
  otherKey: 'courseId'
})

Course.belongsToMany(Student, {
  through: StudentCourse,
  foreignKey: 'courseId',
  otherKey: 'studentId'
})

async function queryStudent() {
  const result = await Student.findAll({
    include: {
      model: Course
    }
  })
  console.log(result)
}

queryStudent()