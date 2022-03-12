var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//schema는 document의 구조가 어떻게 생겼는지 알려주는 역할
var moonjinSchema = new Schema({
    user_phone: String,
    checkup_place: String,
    user_name : String,
    user_birthday : String,
    user_gender : String,
    Q1 : String,
    Q2 : String,
    Q3 : String,
    Q4 : String,
    Q5 : String,
    reg_date: { type: Date }
});

module.exports = mongoose.model('moonjin', moonjinSchema);     //model 모듈화, model은 데이터 조회,입력,수정,삭제 하기 위한 인터페이스 
                                                        //moonjin이라고 지정하면 mongoDB에서는 moonjins(복수형)으로 컬렉션을 사용하겠다는 의미
