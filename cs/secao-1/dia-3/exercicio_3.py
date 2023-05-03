def verify_email(email):
    index = 0
    if not email[index].isalpha():
        raise ValueError("Email should start with letter")
    while email[index] != "@" and index < len(email):
        letter = email[index]
        if (
            not letter.isalpha()
            and not letter.isdigit()
            and letter not in ("_", "-")
        ):
            raise ValueError(
                """Username should have only letters, digits, dashes or
                  underscores"""
            )
        index += 1
    index += 1
    while email[index] != "." and index < len(email):
        letter = email[index]
        if not letter.isalpha() and not letter.isdigit():
            raise ValueError("domino should contain only letters and digits")
        index += 1
    index += 1

    counter = 0
    while index < len(email):
        counter += 1
        index += 1

    if counter > 3:
        raise ValueError("Extension is too big")

    return None
