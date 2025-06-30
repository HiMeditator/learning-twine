Template.add('greetingEN', ['Hello', 'Hi', 'Hey', 'Ciallo']);
Template.add('greetingCN', ['你好', '嗨', '嘿', '恰喽']);
Template.add('greetingTimeEN', function () {
    const hour = (new Date()).getHours();
    if (hour < 12) {
        return 'Good morning, ' + State.variables.name;
    } else if (hour < 18) {
        return 'Good afternoon, ' + State.variables.name;
    } else {
        return 'Good evening, ' + State.variables.name;
    }
});
