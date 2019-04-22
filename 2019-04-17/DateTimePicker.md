                                                                DatePicker再form中使用
在DatePicker控件上设置日期格式，
    format="YYYY-MM-DD HH:mm" ---2019-04-17 14:59
    format="YYYY-MM-DD HH:mm:ss" ---2019-04-17 15:19:48
    format="MMMM Do YYYY, h:mm:ss a" ---April 17th 2019, 3:20:39 pm
    format="dddd" ---Wednesday
    format="MMM Do YY" ---Apr 17th 19
    format="YYYY [escaped] YYYY" ---2019 escaped 2019
    
<Form.Item label="收款日期" key="5">
  {getFieldDecorator(`collectionDays`, {
    initialValue: moment(new Date()),
    rules: [
      {
        required: true,
        message: '请输入!',
      },
    ],
  })(<DatePicker format="YYYY-MM-DD HH:mm" showTime style={{ width: 250 }} />)}
</Form.Item>

