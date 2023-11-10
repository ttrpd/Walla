import {syllable} from 'syllable';

interface IOperator {
    name: string;
    description: string;
    evaluate: (commands: string[], position: number) => {output: any, position: number};
}

const operators: IOperator[] = [
    {
        name: "convert_to_number",
        description: "Converts the following operand to a number",
        evaluate: (commands: string[], position: number) => {
            return { output: 0, position: position + 1};
        }
    },
    {
        name: "convert_to_string",
        description: "Converts the following operand to a string",
        evaluate: (commands: string[], position: number) => {
            return { output: 0, position: position + 1};
        }
    },
    {
        name: "output",
        description: "Prints the following operand",
        evaluate: (commands: string[], position: number) => {
            return { output: 0, position: position + 1};
        }
    },
    {
        name: "add",
        description: "Adds the next two operands together",
        evaluate: (commands: string[], position: number) => {
            return { output: 0, position: position + 1};
        }
    },
    {
        name: "sub",
        description: "Takes the difference of the next two operands",
        evaluate: (commands: string[], position: number) => {
            return { output: 0, position: position + 1};
        }
    },

];

/**
 * The main function for the recursive descent parser
 * @param commands - A list of lines comprising the source
 * @param position - The index of the line in `commands` that is currently being parsed
 */
const parse = (commands: string[], position: number): {output: any, position: number} => {
    if (!commands.length || position >= commands.length || !commands.at(position)) {
        throw new Error("There was an error in the structure of the command stack");
    }

    // parse each word in the line and accumulate the total number of syllables
    const totalSyllables: number = commands[position].split(" ").reduce(
        (syllables: number, currentValue: string) => {
            return syllables + syllable(currentValue);
        },
        0
    );

    if (totalSyllables >= operators.length) {
        return { output: commands.at(position), position: position + 1};
    }

    const operator: IOperator = operators[totalSyllables];
    const parsed = operator.evaluate(commands, position + 1);
    return parsed;
};

// def parse(commands, position, noop=False):
//     print("DEBUG: parse("+str(commands[position:])+", "+str(position)+", "+str(noop)+")")
//     if not len(commands):
//         return
//     total_syllables = 0
//     for word in commands[position].split(" "):
//         total_syllables += syllables.estimate(word)
//     print("total_syllables: "+str(total_syllables))
//     if (total_syllables - 1) > len(operators):
//         return commands[position], position + 1
//     operator = operators[total_syllables - 1]
//     parsed = operator(commands, position + 1, noop)
//     if noop:
//         return None, parsed[1]
//     return parsed