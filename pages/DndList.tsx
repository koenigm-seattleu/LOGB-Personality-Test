import { createStyles, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const useStyles = createStyles((theme) => ({
    item: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.radius.md,
        border: `1px solid ${
            theme.colorScheme === 'dark'
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
        padding: `${theme.spacing.sm}px ${theme.spacing.xl}px`,
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
        marginBottom: theme.spacing.sm,
    },

    itemDragging: {
        boxShadow: theme.shadows.sm,
    },

    symbol: {
        fontSize: 30,
        fontWeight: 700,
        width: 60,
    },
}));

interface DndListProps {
    data: {
        description: string;
        category: string;
    }[];
}

export function DndList({ data }: DndListProps) {
    const { classes, cx } = useStyles();
    const [state, handlers] = useListState(data);
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsBrowser(true);
        }
    }, []);

    const items = state.map((item, index) => (
        <Draggable
            key={item.category}
            index={index}
            draggableId={item.category}
        >
            {(provided, snapshot) => (
                <div
                    className={cx(classes.item, {
                        [classes.itemDragging]: snapshot.isDragging,
                    })}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Text className={classes.symbol}>{item.category}</Text>
                    <div>
                        <Text>{item.description}</Text>
                    </div>
                </div>
            )}
        </Draggable>
    ));

    return (
        <DragDropContext
            onDragEnd={({ destination, source }) =>
                handlers.reorder({
                    from: source.index,
                    to: destination?.index || 0,
                })
            }
        >
            {isBrowser ? (
                <Droppable droppableId='dnd-list' direction='vertical'>
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {items}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            ) : null}
        </DragDropContext>
    );
}
