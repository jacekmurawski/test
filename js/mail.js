define('Mail', ['jquery', 'jquery-spliter', 'bootstrap'], function ($) {
    class Mail {
        constructor(id) {
            console.log("used class Mail");
            this.id = null;
            this.from = null;
            this.to = null;
            this.subject = "";
            this.attach = [];
            this.date = "";
            if(!isNaN(id)) {
                let mail = this.load(id);
                console.log('mail = ', mail);
            }
        }
        load(id) {
            return this;
        }
        remove() {

        }
        send() {
            
        }
    }

    return Mail;
});