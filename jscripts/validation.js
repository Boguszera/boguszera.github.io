   function validation() {
        {
            var emailValue = document.forms["Form"]["email"].value;
                if (emailValue == "")
                {
                alert("BRAK EMAILA");
                return false;
                }

            var topicValue = document.forms["Form"]["topic"].value;
            if (topicValue == "")
            {
                alert("BRAK TEMATU");
                return false;
            }

            var contentValue = document.forms["Form"]["message"].value;
            if (contentValue == "")
            {
                alert("PUSTA WIADOMOŚĆ");
                return false;
            }

            var emailLength = emailValue.length
            if (emailLength < 9)
            {
                alert("EMAIL JEST ZBYT KRÓTKI")
                return false;
            }

            var topicLength = topicValue.length
            if (topicLength < 10)
            {
                alert("TEMAT JEST ZBYT KRÓTKI (min. 10 znaków)")
                return false;
            }

            var contentLenght = contentValue.length
            if (contentLenght < 20)
            {
                alert("WIADOMOŚĆ ZBYT KRÓTKA (min. 20 znaków)")
                return false;
            }
    }
   }